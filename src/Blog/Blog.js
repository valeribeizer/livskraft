import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import NavBar from "../NavBar/NavBar";
import "./style.css";
import Footer from "../Footer/Footer";

const CATEGORY_FILTERS = [
  { label: "Alla", key: "alla" },
  { label: "Kroppen", key: "kroppen" },
  { label: "Läkemedel", key: "lakenmedel" },
  { label: "Naturligt stöd", key: "naturligt_stod" },
  { label: "Nervsystemet", key: "nervsystemet" },
  { label: "Kost", key: "kost" },
  { label: "Klientresor", key: "klientresor" },
  { label: "Från apoteket", key: "fran_apoteket" },
];

const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = process.env.REACT_APP_AIRTABLE_TABLE_ID;
const AIRTABLE_TOKEN = process.env.REACT_APP_AIRTABLE_TOKEN;

const getFieldValue = (fields, candidates) => {
  for (const candidate of candidates) {
    if (fields[candidate] !== undefined && fields[candidate] !== null) {
      return fields[candidate];
    }
  }
  return "";
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("alla");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      if (!AIRTABLE_BASE_ID || !AIRTABLE_TABLE_ID || !AIRTABLE_TOKEN) {
        setFetchError("Airtable-inställningar saknas.");
        return;
      }

      setIsLoading(true);
      setFetchError("");

      try {
        const query = new URLSearchParams();
        query.append("sort[0][field]", "publish_date");
        query.append("sort[0][direction]", "desc");
        query.append(
          "filterByFormula",
          "OR({status}='Publicerad',{status}='Klar')"
        );

        const response = await fetch(
          `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}?${query.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            },
          }
        );

        if (!response.ok) {
          const errorPayload = await response.json().catch(() => null);
          const errorMessage =
            errorPayload?.error?.message || "Kunde inte hämta artiklar.";
          throw new Error(errorMessage);
        }

        const data = await response.json();
        const mappedArticles = (data.records || [])
          .map((record) => {
            const fields = record.fields || {};
            const title = getFieldValue(fields, ["title", "Title"]);
            const category = getFieldValue(fields, ["category", "Category"]);
            const ingress = getFieldValue(fields, ["ingress", "Ingress"]);
            const body = getFieldValue(fields, ["body", "Body"]);
            const publishDate = getFieldValue(fields, [
              "publish_date",
              "Publish Date",
            ]);
            const imageUrl = getFieldValue(fields, [
              "features_image_url",
              "featured_image_url",
              "Featured Image URL",
            ]);
            const slug = getFieldValue(fields, ["slug", "Slug"]);

            return {
              id: record.id,
              title: title || "Untitled",
              category,
              excerpt: ingress || body || "",
              publishDate,
              imageUrl,
              slug,
            };
          })
          .filter((article) => article.category);

        setArticles(mappedArticles);
      } catch (error) {
        setFetchError(error.message || "Något gick fel vid hämtning av artiklar.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "alla") {
      return articles;
    }
    return articles.filter((article) => article.category === selectedCategory);
  }, [articles, selectedCategory]);
  const isEmpty = filteredArticles.length === 0;

  return (
    <div className="blog-page">
      <NavBar />
      <div className="blog-container">
        <h1>ARTIKLAR</h1>

        <div className="article-filters">
          {CATEGORY_FILTERS.map((category) => (
            <button
              key={category.key}
              type="button"
              className={`btn_main article-filter-btn ${
                selectedCategory === category.key ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <section
          className={`articles-list ${isEmpty ? "is-empty" : ""}`}
          aria-live="polite"
        >
          {isLoading ? (
            <p className="articles-empty">Laddar artiklar...</p>
          ) : fetchError ? (
            <p className="articles-empty">{fetchError}</p>
          ) : isEmpty ? (
            <p className="articles-empty">
              Inga artiklar i denna kategori ännu.
            </p>
          ) : (
            filteredArticles.map((article) => (
              <Link
                key={article.id}
                className="article-card-link"
                to={`/artiklar/${article.slug || article.id}`}
              >
                <article
                  className="article-card"
                  style={
                    article.imageUrl
                      ? { backgroundImage: `url(${article.imageUrl})` }
                      : undefined
                  }
                >
                  <div className="article-card-overlay">
                    <p className="article-card-category">
                      {String(article.category).replaceAll("_", " ").toUpperCase()}
                    </p>
                    <h3>{article.title}</h3>
                  </div>
                </article>
              </Link>
            ))
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
