import Button from "@/components/Button";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

type question = {
    prompt: string;
    hand: string;
}

const prompts: string[] = [
    "勝って！",
    "負けて！",
    "あいこにして！",
];
const hands: string[] = [
    "グー",
    "チョキ",
    "パー",
];

function getRandomInt(max: Int32) {
    return Math.floor(Math.random() * max);
}

function createQuestions(): question[] {
    let questions: question[] = []
    for (let i = 0; i < 10; i++){
        let prompt_index: Int32 = getRandomInt(3);
        let hand_index: Int32 = getRandomInt(3);
        let prompt = prompts[prompt_index];
        let hand = hands[hand_index];
        let new_question = { prompt: prompt, hand: hand };
        questions.push(new_question);
    }
    return questions
}

function assertAnswer(prompt: string, hand: string, answer: string): string {
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
    const questions: question[] = createQuestions();
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    let question: question = questions[questionIndex];
    let prompt: string = question.prompt;
    let hand: string = question.hand;

    const countScore = (prompt: string, hand: string, label: string) => {
        if (assertAnswer(prompt, hand, label) === "正解！") {
            alert("正解！");
            setScore((prevScore) => prevScore + 5);
        }
        else {
            alert("不正解！");
            setScore((prevScore) => prevScore);
        }

        if (questionIndex < questions.length - 1) {
            setQuestionIndex((prev) => prev + 1);
        } else {
            alert("終了！あなたのスコアは " + score + " 点です");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.prompt_text}>{prompt}</Text>
            <Text style={styles.hand_text}>{hand}</Text>
            <Button label="グー" onPress={() => countScore(prompt, hand, "グー")}/>
            <Button label="チョキ" onPress={() => countScore(prompt, hand, "チョキ")}/>
            <Button label="パー" onPress={() => countScore(prompt, hand, "パー")}/>
        </View>
    )
}

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
