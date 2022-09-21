
import { Auth0Provider } from "@bcwdev/auth0provider";
import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";



export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createHouse)
  }
  async getHouses(request, response, next) {
    try {
      const houses = await housesService.getHouses()
      response.send(houses)
    } catch (error) {
      next(error)
    }
  }

  async createHouse(request, response, next) {
    try {
      const house = request.body
      house.sellerId = request.userInfo.id
      const newHouse = await housesService.createHouse(house)
      response.send(newHouse)
    } catch (error) {
      next(error)
    }
  }

  async editHouse(request, response, next) {
    try {
      const house = await housesService.editHouse(req.body, req.userInfo)
    } catch (error) {
      next(error)
    }
  }
}