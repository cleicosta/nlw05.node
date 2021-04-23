import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISenttingsCreate{
    chat: boolean;
    username: string;
}


class SettingService{
    private settingsRepository: Repository<Setting>;
    constructor (){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }
 async create ({chat, username}:ISenttingsCreate){
     
    const userAlreadyExist = await this.settingsRepository.findOne({
        username
    });
    if(userAlreadyExist){
        throw new Error ("User already exists!");
    }
    const settings = this.settingsRepository.create({
        chat,
        username
    });
    
        await this.settingsRepository.save(settings);

        return settings;  
 }
        async findByUsername(username:string){
            const settings = await this.settingsRepository.findOne({
                username,
            });
            return settings;
        }

        async update(username:string,chat:boolean){
            await this.settingsRepository.createQueryBuilder().
            update(Settings)
            .set({chat})
            .where("username = username",{
                username,
            })
            .execute();

        }
}

export {SettingService}; 