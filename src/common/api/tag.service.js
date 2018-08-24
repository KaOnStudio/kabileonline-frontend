import ApiService from '@/common/api/api.service';

export default {
  get() {
    return ApiService.get('tags');
  }
};
