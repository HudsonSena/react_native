import { FilterStatus } from "@/types/FilterStatus";
import { CircleCheck, CircleDashed } from "lucide-react-native";

export function StatusIcon({ status, ...rest }: {status: FilterStatus}) {
    return status === FilterStatus.DONE ? (
        <CircleCheck size={18} color={"#2C4681"} {...rest}/>
    ) : (
        <CircleDashed size={18} color={"#000000"}/>
    )
}