import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const MainInstance = {
  async query(resource, params) {
    return instance.get(resource, params);
  },

  async download(resource, params, type) {
    return instance.get(resource, { params, responseType: type });
  },

  async fetch(resource, slug = "", params) {
    return instance.get(`${resource}/${slug}`, params);
  },

  async post(resource, params, config) {
    return instance.post(`${resource}`, params, config);
  },

  async create(resource, slug = "", params, config) {
    return instance.post(`${resource}/${slug}`, params, config);
  },

  async update(resource, slug, params) {
    return instance.put(`${resource}/${slug}`, params);
  },

  async put(resource, params, config) {
    return instance.put(`${resource}`, params, config);
  },

  async delete(resource, config) {
    return instance.delete(resource, config);
  },

  async deleteSlug(resource, slug, config) {
    return instance.delete(`${resource}/${slug}`, config);
  },

  cancelRequest() {
    return instance.CancelToken;
  },
};

export default MainInstance;
