import Store from '../core/store';
import { getArticles } from '../core/api/newsApi';

const articlesStore = new Store({
  articles: [],
});

export async function loadArticles() {
  try {
    const querySnapshot = await getArticles();
    querySnapshot.forEach(doc => {
      articlesStore.state.articles.push(doc.data());
    });

    return articlesStore.state.articles;
  } catch (err) {
    console.error(err);
  }
}
export default articlesStore;
