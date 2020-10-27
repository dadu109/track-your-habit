import React, {ReactElement, useEffect, useState} from 'react';
import { StyleSheet, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

export type FontSource = Parameters<typeof Font.loadAsync>[0];

export interface ILoadAssersProps {
    fonts: FontSource;
    children: ReactElement | ReactElement[]
}

const usePromiseAll = (promises: Promise<void | void[]>[], cb: () => void) =>
  useEffect(() => {
    (async () => {
      await Promise.all(promises);
      cb();
    })();
  });


export function LoadAssers ({fonts, children}: ILoadAssersProps) {
    const [ready, setReady] = useState(false);
    usePromiseAll([Font.loadAsync(fonts)],() => setReady(true));

    return ( 
        <View style={styles.container}>
        {
            ready
            ?
            children
            :
            <ActivityIndicator size="large" color="#FFEB3B" />
        }
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default LoadAssers;