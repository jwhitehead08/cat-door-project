/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ARTICLES, getArticleBySlug } from '../../../data/articles';
import ArticlePageView from '../../../views/ArticlePage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Digsy Resources`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  return <ArticlePageView article={article} />;
}
