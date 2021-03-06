import ApiService from '@/common/api/api.service';

export default {
  get(slug) {
    if (typeof slug !== 'string') {
      throw new Error('[KaoN] CommentsService.get() article slug required to fetch comments');
    }
    return ApiService.get('articles', `${slug}/comments`);
  },

  post(slug, payload) {
    return ApiService.post(
      `articles/${slug}/comments`, {comment: {body: payload}});
  },

  destroy(slug, commentId) {
    return ApiService
      .delete(`articles/${slug}/comments/${commentId}`);
  }
};
