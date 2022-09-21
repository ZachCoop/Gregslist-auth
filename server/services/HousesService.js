import { dbContext } from "../db/DbContext.js";



class HousesService {

  // ANCHOR EDIT HOUSE FROM FORMDATA
  editHouse(houseData) {
    const house = await this.getHouse()

    if (userInfo.id) {

    }
  }
  async createHouse(formData) {
    const house = await dbContext.Houses.create(formData)
    return house
  }
  async getHouses() {
    const houses = await dbContext.Houses.find()
    return houses
  }
}


export const housesService = new HousesService()