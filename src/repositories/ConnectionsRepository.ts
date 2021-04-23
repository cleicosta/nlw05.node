import { Connection, EntityRepository, Repository } from "typeorm";
import { Connections } from "../entities/Connections";

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connections>{}

export {ConnectionsRepository};
