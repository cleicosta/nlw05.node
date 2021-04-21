import {EntityRepository, Repository} from "typeorm";
import {User} from "../entities/User";

@EntityRepository(User)
class Usersrepository extends Repository<User>{

}

export {Usersrepository};