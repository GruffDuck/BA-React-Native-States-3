import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Metrics } from "./Metrics";
import { AntDesign } from "@expo/vector-icons";

import { useState, useEffect } from "react";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>BA Taktir</Text>
    </View>
  );
};
type WorkPrep = {
  count: number;
  onCountChange: (count: number) => void;
};

const WorkTime = (props: WorkPrep) => {
  const { count = 1, onCountChange } = props;

  return (
    <View style={styles.WorkTime}>
      <Text style={styles.WorktimeTitle}>Çalışma Saati</Text>
      <TouchableOpacity
        onPress={() => onCountChange(count + 1)}
        activeOpacity={0.7}
        style={styles.plus}
      >
        <AntDesign name="plus" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity
        onPress={() => onCountChange(Math.max(count - 1, 1))}
        activeOpacity={0.7}
        style={styles.minus}
      >
        <AntDesign name="minus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};
type FinishProp = {
  count: number;
  onCountChange: (count: number) => void;
};

const FinishTime = (props: FinishProp) => {
  const { count = 1, onCountChange } = props;

  return (
    <View style={styles.finish}>
      <Text style={styles.finishtitle}>Bitirilen iş</Text>
      <TouchableOpacity
        onPress={() => onCountChange(count + 1)}
        activeOpacity={0.7}
        style={styles.plus}
      >
        <AntDesign name="plus" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity
        onPress={() => onCountChange(Math.max(count - 1, 1))}
        activeOpacity={0.7}
        style={styles.minus}
      >
        <AntDesign name="minus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};
type LevelProp = {
  count: number;
  onCountChange: (count: number) => void;
};
const Level = (props: LevelProp) => {
  const { count = 1, onCountChange } = props;
  return (
    <View style={styles.level}>
      <Text style={styles.leveltitle}>Zorluk Seviyesi</Text>
      <TouchableOpacity
        onPress={() => onCountChange(1)}
        activeOpacity={0.7}
        style={styles.easy}
      >
        <Text style={styles.txt}>Kolay</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onCountChange(2)}
        activeOpacity={0.7}
        style={styles.normal}
      >
        <Text style={styles.txt}>Orta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onCountChange(3)}
        activeOpacity={0.7}
        style={styles.hard}
      >
        <Text style={styles.txt}>Zor</Text>
      </TouchableOpacity>
    </View>
  );
};
type HonorProp = {
  text: string;
  onTextChange: (text: string) => void;
};
const Honor = (props: HonorProp) => {
  const { text = "", onTextChange } = props;
  useEffect(() => {
    onTextChange(text);
  }, [text, onTextChange]);

  return (
    <View style={styles.honor}>
      <Text style={styles.honortitle}>Taktir:</Text>
      <Text style={styles.honortext}>{text}</Text>
    </View>
  );
};
export default function App() {
  const [count, setCount] = useState(1);
  const [finish, setFinish] = useState(1);
  const [level, setLevel] = useState(1);
  const [honor, setHonor] = useState("");
  const SetHonorText = () => {
    if (level * finish * count >= 30) {
      setHonor("Mükemmelsin");
    } else if (level * finish * count >= 15 && level * finish * count < 30) {
      setHonor("Çok iyi");
    } else if (level * finish * count < 15) {
      setHonor("İyi");
      console.log(level * finish * count);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <WorkTime count={count} onCountChange={setCount} />
      <FinishTime count={finish} onCountChange={setFinish} />
      <Level count={level} onCountChange={setLevel} />
      <Honor text={honor} onTextChange={SetHonorText} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    height: Metrics.measureHeight(60),
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
  },
  title: {
    top: Metrics.measureHeight(10),
    fontSize: 20,
    color: "white",
  },
  WorkTime: {
    top: Metrics.measureHeight(60),
    height: Metrics.measureHeight(60),
    width: "100%",
    backgroundColor: "#e5e5e5",

    justifyContent: "center",
  },
  WorktimeTitle: {
    fontSize: 30,
    color: "#14213d",
    left: Metrics.measureWidth(15),
  },
  plus: {
    position: "absolute",
    height: Metrics.measureHeight(22),
    width: Metrics.measureWidth(30),
    backgroundColor: "#14213d",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    right: Metrics.measureWidth(15),
  },
  count: {
    position: "absolute",
    fontSize: 23,
    fontWeight: "bold",
    color: "#14213d",
    right: Metrics.measureWidth(55),
  },
  minus: {
    position: "absolute",
    height: Metrics.measureHeight(22),
    width: Metrics.measureWidth(30),
    backgroundColor: "#14213d",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    right: Metrics.measureWidth(75),
  },
  finish: {
    top: Metrics.measureHeight(60),
    height: Metrics.measureHeight(60),
    width: "100%",
    backgroundColor: "#e5e5e5",

    justifyContent: "center",
  },
  finishtitle: {
    fontSize: 30,
    color: "#14213d",
    left: Metrics.measureWidth(15),
  },
  level: {
    top: Metrics.measureHeight(100),
    height: Metrics.measureHeight(60),
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
  },
  leveltitle: {
    top: Metrics.measureHeight(-10),
    position: "absolute",
    fontSize: 25,
    color: "#14213d",
  },
  easy: {
    position: "absolute",
    top: Metrics.measureHeight(30),
    height: Metrics.measureHeight(30),
    width: Metrics.measureWidth(60),
    backgroundColor: "#14213d",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    right: Metrics.measureWidth(15),
  },
  normal: {
    position: "absolute",
    top: Metrics.measureHeight(30),
    height: Metrics.measureHeight(30),
    width: Metrics.measureWidth(60),
    backgroundColor: "#14213d",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  hard: {
    position: "absolute",
    top: Metrics.measureHeight(30),
    height: Metrics.measureHeight(30),
    width: Metrics.measureWidth(60),
    backgroundColor: "#14213d",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    left: Metrics.measureWidth(15),
  },
  txt: {
    color: "white",
  },
  honor: {
    top: Metrics.measureHeight(200),
    height: Metrics.measureHeight(200),
    width: "90%",
    borderColor: "#e5e5e5",
    borderWidth: 5,
    alignItems: "center",
    borderRadius: 15,

    justifyContent: "center",
  },
  honortitle: {
    position: "absolute",
    left: Metrics.measureWidth(15),
    top: Metrics.measureHeight(10),
    fontSize: 30,
    color: "#14213d",
  },
  honortext: {
    fontSize: 35,
    color: "#14213d",
  },
});
