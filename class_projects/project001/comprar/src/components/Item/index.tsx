import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { Trash2 } from "lucide-react-native";
import { StatusIcon } from "../StatusIcon";
import { FilterStatus } from "@/types/FilterStatus";

type ItemData = {
    status: FilterStatus,
    description: string,
}

type Props = {
    data: ItemData
    onStatus: () => void
    onRemove: () => void
}

export function Item({ data, onStatus, onRemove }: Props) {
    return (
        <View style={style.container}>
            <TouchableOpacity activeOpacity={.8} onPress={onStatus}>
                <StatusIcon status={data.status} />
            </TouchableOpacity>

            <Text style={style.description}>
                {data.description}
            </Text>

            <TouchableOpacity onPress={onRemove}>
                <Trash2 size={18} color="#828282" />
            </TouchableOpacity>
        </View>
    )
}