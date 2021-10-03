import { Developer } from "../entity/Developer";
import { getRepository } from "typeorm";

export class DeveloperController {
    private devRepository = getRepository(Developer);

    async getAll(query) {
        if(Object.keys(query).length) {
            const sqlQuery = this.devRepository.createQueryBuilder("developer");
            let count = 0;
            Object.entries(query).forEach(([key, value]) => {
                if(count === 0) {
                    sqlQuery.where(`developer.${key} = "${value}"`)
                    count++;
                } else {
                    sqlQuery.orWhere(`developer.${key} = "${value}"`)
                }
            });
            return sqlQuery.getMany();
        }
        return this.devRepository.find();
    }

    async getDeveloper(id) {
        return this.devRepository.findOne({ id });
    }

    async add(body) {
        return this.devRepository.save(body);
    }

    async update(id, body) {
        const dev = await this.devRepository.findOne({ id });

        Object.entries(body).forEach(([key, value]) => {
            dev[key] = value;
        });

        return this.devRepository.save(dev);
    }

    async deleteDev(id) {
        return this.devRepository.delete({ id });
    }
}