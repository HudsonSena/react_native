import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";
import { StatusIcon } from "../StatusIcon";

type Props = TouchableOpacityProps & {
    status: FilterStatus,
    isActive: boolean,
}

export function Filter({ status, isActive, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={[style.container, { opacity: isActive ? 1 : 0.5}]} {...rest}
            activeOpacity={.8}
        >
            <StatusIcon status={status}/>
            <Text style={style.title}>
                { status === FilterStatus.DONE ? "Comprados": "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
}