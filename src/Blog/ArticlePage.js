import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./style.css";

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

const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      if (!AIRTABLE_BASE_ID || !AIRTABLE_TABLE_ID || !AIRTABLE_TOKEN) {
        setFetchError("Airtable-inställningar saknas.");
        setIsLoading(false);
        return;
      }

      try {
        const query = new URLSearchParams();
        query.append("maxRecords", "100");
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
            errorPayload?.error?.message || "Kunde inte hämta artikeln.";
          throw new Error(errorMessage);
        }

        const data = await response.json();
        const mappedArticles = (data.records || []).map((record) => {
          const fields = record.fields || {};
          return {
            id: record.id,
            title: getFieldValue(fields, ["title", "Title"]),
            slug: getFieldValue(fields, ["slug", "Slug"]),
            category: getFieldValue(fields, ["category", "Category"]),
            author: getFieldValue(fields, ["author", "Author"]),
            publishDate: getFieldValue(fields, [
              "publish_date",
              "Publish Date",
            ]),
            body: getFieldValue(fields, ["body", "Body"]),
            ingress: getFieldValue(fields, ["ingress", "Ingress"]),
            imageUrl: getFieldValue(fields, [
              "features_image_url",
              "featured_image_url",
              "Featured Image URL",
            ]),
          };
        });

        const currentArticle = mappedArticles.find(
          (item) => item.slug === slug || item.id === slug
        );

        if (!currentArticle) {
          throw new Error("Artikeln hittades inte.");
        }

        setArticle(currentArticle);
      } catch (error) {
        setFetchError(error.message || "Något gick fel.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  return (
    <div className="blog-page">
      <NavBar />
      <main className="article-page-container">
        {isLoading ? <p className="article-page-state">Laddar artikel...</p> : null}
        {!isLoading && fetchError ? (
          <p className="article-page-state">{fetchError}</p>
        ) : null}
        {!isLoading && !fetchError && article ? (
          <article className="article-page-content">
            {article.imageUrl ? (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="article-page-image"
                loading="lazy"
              />
            ) : null}
            {article.category ? (
              <p className="article-page-category">
                {String(article.category).replaceAll("_", " ").toUpperCase()}
              </p>
            ) : null}
            <h1 className="article-page-title">{article.title}</h1>
            {(article.author || article.publishDate) ? (
              <div className="article-page-meta">
                {article.author ? (
                  <span className="article-page-author">
                    {String(article.author).toUpperCase()}
                  </span>
                ) : null}
                {article.publishDate ? (
                  <span className="article-page-date">{article.publishDate}</span>
                ) : null}
              </div>
            ) : null}
            {article.ingress ? <p className="article-page-ingress">{article.ingress}</p> : null}
            {article.body ? (
              <div
                className="article-page-body"
                dangerouslySetInnerHTML={{ __html: article.body }}
              />
            ) : null}
          </article>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
