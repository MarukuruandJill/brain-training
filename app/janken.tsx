import Button from "@/components/Button";
import { StyleSheet, Text, View } from "react-native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";


const prompts: string[] = [
    "勝ってください！",
    "負けてください！",
    "あいこにしてください！",
];
const hands: string[] = [
    "グー",
    "チョキ",
    "パー",
];

function getRandomInt(max: Int32) {
    return Math.floor(Math.random() * max);
}

function asertAnswer(prompt: string, hand: string, answer: string): string {
    if (prompt === prompts[0]) {
        if (hand === hands[0]) {
            if (answer === hands[2]) {
                return "正解！"
            } else {
                return "不正解！"
            }
        }
        if (hand === hands[1]) {
            if (answer === hands[0]) {
                return "正解！"
            } else {
                return "不正解！"
            }
        }
        if (hand === hands[2]) {
            if (answer === hands[1]) {
                return "正解！"
            } else {
                return "不正解！"
            }
        }
    }
    else if (prompt === prompts[1]) {
        if (hand === hands[0]) {
            if (answer === hands[1]) {
                return "正解！"
            } else {
                return "不正解！"
            }
        }
        if (hand === hands[1]) {
            if (answer === hands[2]) {
                return "正解！"
            } else {
                return "不正解！"
            }
        }
        if (hand === hands[2]) {
            if (answer === hands[0]) {
                return "正解！"
            } else {
                return "不正解！"
            }
        }
    }
    else {
        if (hand === hands[0]) {
            if (answer === hands[0]) {
                return "正解！"
            } else {
                return "不正解！"
            }
        }
        if (hand === hands[1]) {
            if (answer === hands[1]) {
                return "正解！"
            } else {
                return "不正解！"
            }
        }
        if (hand === hands[2]) {
            if (answer === hands[2]) {
                return "正解！"
            } else {
                return "不正解！"
            }
        }
    }
    // Default return statement to satisfy the function's return type
    return "不正解！";
}
export default function Janken() {
    const prompt_index: Int32 = getRandomInt(3)
    const hand_index: Int32 = getRandomInt(3)
    const prompt = prompts[prompt_index]
    const hand = hands[hand_index]


    return (
        <View style={styles.container}>
            <Text style={styles.prompt_text}>{prompt}</Text>
            <Text style={styles.hand_text}>{hand}</Text>
            <Button label="グー" onPress={() => alert(asertAnswer(prompt, hand, "グー"))}/>
            <Button label="チョキ" onPress={() => alert(asertAnswer(prompt, hand, "チョキ"))}/>
            <Button label="パー" onPress={() => alert(asertAnswer(prompt, hand, "パー"))}/>
        </View>
    )
}

export const options = {
    title: 'じゃんけん',
    headerStyle: { backgroundColor: '#f4511e' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    prompt_text: {
        fontSize: 30,
    },
    hand_text: {
        fontSize: 40,
    }
});
