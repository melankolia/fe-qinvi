import MainInstance from "@/services/main.instance";
import { MENU } from "@/services/constants";

const HomeService = {
  getHome(id: any) {
    return MainInstance.fetch(MENU.GET_HOME, id, null);
  },
  postPresence(data: any, secureId: any) {
    return MainInstance.create(MENU.HADIR, secureId, data, null);
  },
  postWishes(data: any, secureId: any) {
    return MainInstance.create(MENU.UCAPAN, secureId, data, null);
  },
};

export default HomeService;
