const publicKEY = '$2a$10$SEUUqrFg.ZO75cr2BOh/C.548oHRV8YCPGoY5rPsvXYX1RFYsCn7y';

export default class HapiService {

    theBurrow = 'https://www.potterapi.com/v1';

    async getMagic(url) {
        const res = await fetch(`${this.theBurrow}${url}`);
        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getMagic(`/characters?key=${publicKEY}`)
        return res;
    }

    async getCharacter(id) {
        const character = await this.getMagic(`/characters/${id}?key=${publicKEY}`)
        return character;
    }

    getAllSpells() {
        return this.getMagic(`/spells?key=${publicKEY}`)
    }

    async getAllHouses() {
        const res = await this.getMagic(`/houses?key=${publicKEY}`)
        return res.map(this.infoHouse());
    }


    async getHouse(id) {
        const house = await this.getMagic(`/houses/${id}?key=${publicKEY}`)
        return this.infoHouse(house);
    }

    infoHouse(house) {
        return {
            id: house[0].id,
            name: house[0].name,
            mascot: house[0].mascot,
            founder: house[0].founder,
            headOfHouse: house[0].headOfHouse,
            houseGhost: house[0].houseGhost,
            colors: house[0].colors.join(', ')
        }
    }

    infoCharacter(character) {
        return {
            id: character.id,
            name: character.name,
            alias: character.alias,
            bloodstatus: character.bloodstatus,
            role: character.role,
            wand: character.wand,
            patronus: character.patronus,
            boggart: character.boggart
        }
    }
}



