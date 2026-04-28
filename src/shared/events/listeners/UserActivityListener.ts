import { eventBus } from "../EventBus";
import { EVENTS } from "../events";
import { ActivityRepository } from "../../../services/activity/infrastructure/ActivityRepository";

const activityRepo = new ActivityRepository();

eventBus.subscribe(EVENTS.USER_REGISTERED, async (payload) => {

    console.log("Activity listener triggered");
    console.log("User registered event payload", payload);

    try {
        await activityRepo.create({
            type: "USER_REGISTERED",
            userId: payload.userId,
            email: payload.email,
            mobile: payload.mobile,
            createdAt: new Date()
        });
        console.log("User registered activity created");
    } catch (err: any) {
        console.error("ERROR MESSAGE:", err.message);
        console.error("ERROR CODE:", err.code);
        console.error("ERROR META:", err.meta); // 👈 MOST IMPORTANT
        console.error(err);
        throw err;
    }

});