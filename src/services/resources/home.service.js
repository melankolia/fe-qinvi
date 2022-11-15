import MainInstance from "@/services/main.instance";
import { MENU } from "@/services/constants";

const HomeService = {
  getHome(id) {
    return MainInstance.fetch(MENU.GET_HOME, id);
  },
  postPresence(data, secureId) {
    return MainInstance.create(MENU.HADIR, secureId, data);
  },
  postWishes(data, secureId) {
    return MainInstance.create(MENU.UCAPAN, secureId, data);
  },
};

export default HomeService;
