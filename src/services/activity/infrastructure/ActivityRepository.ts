import { ActivityModel } from "../../../shared/config/mongodb/models/ActivityModel";

export class ActivityRepository  {
    async create(data:any) {
        return ActivityModel.create(data);
    }
}