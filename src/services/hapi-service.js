const publicKEY = '$2a$10$SEUUqrFg.ZO75cr2BOh/C.548oHRV8YCPGoY5rPsvXYX1RFYsCn7y';

export default class HapiService {

    theBurrow = 'https://www.potterapi.com/v1';

    async getMagic(url) {
        const res = await fetch(`${this.theBurrow}${url}`);
        return await res.json();
    }

    async getAllCharacters() {
        return this.getMagic(`/characters?key=${publicKEY}`)
    }

    async getCharacter(id) {
        return this.getMagic(`/characters/${id}?key=${publicKEY}`)
    }

    getAllSpells() {
        return this.getMagic(`/spells?key=${publicKEY}`)
    }

    async getAllHouses() {
        return this.getMagic(`/houses?key=${publicKEY}`)
    }


    getHouse(id) {
        return this.getMagic(`/houses/${id}?key=${publicKEY}`)
    }
}



