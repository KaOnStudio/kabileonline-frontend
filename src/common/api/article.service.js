import ApiService from '@/common/api/api.service';

export default {
  query(type, params) {
    return ApiService
      .query(
        'articles' + (type === 'feed' ? '/feed' : ''),
        {params: params}
      )
  },
  get(slug) {
    return ApiService.get('articles', slug);
  },
  create(params) {
    return ApiService.post('articles', {article: params});
  },
  update(slug, params) {
    return ApiService.update('articles', slug, {article: params});
  },
  destroy(slug) {
    return ApiService.delete(`articles/${slug}`);
  }
};
