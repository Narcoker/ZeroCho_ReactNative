import { NavigationRouteContext } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { RootStackParamList } from "../../App";
import DismissKeyboardView from "../commponents/DismissKeyboardView";

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignIn({ navigation }: SignInScreenProps) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef<TextInput|null>(null); //generic
    const passwordRef = useRef<TextInput|null>(null);

    const onChangeEmail = useCallback((text) => {
        setEmail(text.trim());
    }, []);

    const onChangePassword = useCallback((text) => {
        setPassword(text.trim());
    }, []);

    const onSubmit = useCallback(() => {
        if (!email || !email.trim()) {
            return Alert.alert('알림', '이메일을 입력해주세요');
        }
        if (!password || !password.trim()) {
            return Alert.alert('알림', '비밀번호을 입력해주세요');
        }

        Alert.alert('알림', '안녕~');

    }, [])
    
    const toSignUp = useCallback(()=>{
        navigation.navigate('SignUp');
    }, [navigation])
    
    return ( 
        <DismissKeyboardView>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>이메일</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="이메일을 입력해주세요."
                    value={email}
                    onChangeText={onChangeEmail}
                    importantForAutofill="yes"
                    autoComplete="email"
                    keyboardType="email-address"  // 키보드가 @ 있는 타입으로 변경
                    returnKeyType="next" // 키보드 확인 버튼이 다음 버튼으로 UI 변경
                    onSubmitEditing={() => {
                        passwordRef.current?.focus();
                    }} // 다음 버튼 클릭시 password로 포커싱 될수 있도록
                    blurOnSubmit={false} // 키보드 내려가는 거 막는 것
                    ref={emailRef}
                    clearButtonMode="while-editing" // 아이폰 전용, 텍스트 박스 오른쪽에 X 뜨는 것(통째로 지워짐)
                ></TextInput>
            </View>
            <View style={styles.inputWrapper}>
                <Text  style={styles.label}>비밀번호</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="비밀번호를 입력해주세요."
                    value={password}
                    onChangeText={onChangePassword}
                    secureTextEntry
                    importantForAutofill="yes"
                    autoComplete="password"
                    keyboardType="decimal-pad"  // 키보드가 숫자판 타입으로 변경
                    ref={passwordRef}
                    onSubmitEditing={onSubmit}
                    clearButtonMode="while-editing" 
                    
                ></TextInput>
            </View>
            <View style={styles.buttonZone}>
                <Pressable
                    onPress={onSubmit}
                    style={
                        !email || !password
                            ? styles.loginButton
                            : StyleSheet.compose(styles.loginButton, styles.loginButtonActive)}
                    disabled={!email || !password} > 
                    <Text style={styles.loginButtonText}>로그인</Text>
                </Pressable>
                <Pressable onPress={toSignUp}>
                    <Text>회원가입하기</Text>
                </Pressable>
            </View>
            <View></View>
        </DismissKeyboardView>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        padding: 20,
        fontSize:  16,
    },

    textInput: {
        padding: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20
    },

    loginButton: {
        backgroundColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
    },

    loginButtonActive: {
        backgroundColor: "blue"
    },
    loginButtonText: {
        color: "white"
    },

    buttonZone: {
        alignItems: 'center'
    }
})

export default SignIn;


