import Button from "@/components/Button";
import { router } from "expo-router";
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
    const [showquestion, setShowquestion] = useState(true);
    const [check, setCheck] = useState("正解！");
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const [isBeforeStart, setIsBeforeStart] = useState(true);
    let question: question = questions[questionIndex];
    let prompt: string = question.prompt;
    let hand: string = question.hand;

    const countScore = (prompt: string, hand: string, label: string) => {
        if (assertAnswer(prompt, hand, label) === "正解！") {
            setScore((prevScore) => prevScore + 5);
            setShowquestion(() => false);
            setCheck(() => "正解！");
        }
        else {
            setScore((prevScore) => prevScore);
            setShowquestion(() => false);
            setCheck(() => "不正解！");
        }

        if (questionIndex < questions.length - 1) {
            setQuestionIndex((prev) => prev + 1);
        } else {
            setIsLastQuestion(() => true);
        }
    }

    const changeToQuestion = () => {
        setShowquestion(() => true);
    }

    const startQuestion = () => {
        setIsBeforeStart(() => false);
    }

    if (isBeforeStart) {
        return (
            <View style={styles.container}>
                <Text style={styles.prompt_text}>ボタンを押して開始</Text>
                <Button label="開始" onPress={() => startQuestion()}/>
            </View>
        )
    }

    if (isLastQuestion) {
        const show_score = "あなたのスコアは" + score + "点です";
        return (
            <View style={styles.container}>
                <Text style={styles.prompt_text}>終了!</Text>
                <Text style={styles.prompt_text}>{ show_score }</Text>
                <Button label="ホームに戻る" onPress={() => router.push("/")}/>
                <Button label="もう1度" onPress={() => router.push("/janken")} />
            </View>
        )
    }else if (showquestion){
        return (
            <View style={styles.container}>
                <Text style={styles.prompt_text}>{prompt}</Text>
                <Text style={styles.hand_text}>{hand}</Text>
                <Button label="グー" style={styles.rock_button}  onPress={() => countScore(prompt, hand, "グー")}/>
                <Button label="チョキ" style={styles.scissors_button} onPress={() => countScore(prompt, hand, "チョキ")}/>
                <Button label="パー" style={styles.paper_button} onPress={() => countScore(prompt, hand, "パー")}/>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
            <Text style={styles.prompt_text}>{check}</Text>
            <Button label="次の問題へ" onPress={() => changeToQuestion()}/>
        </View>
        )
    }
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
    },
    rock_button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    paper_button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'blue',
    },
    scissors_button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'yellow',
    }
});
