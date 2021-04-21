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
}

export {SettingService}; 