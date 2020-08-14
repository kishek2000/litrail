import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
} from "react-native";
import {
  MAIN_PRIMARY_COLOUR,
  ScreenHeadingStyles,
  OpalDetails,
} from "../../constants";
import opalIcon from "../../assets/opal.png";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsButton } from "./SettingsButton";
import { SettingsScreen } from "./SettingsScreen";
import { CloseModal } from "../../components/tripdetails/CloseModal";

import googlePayIcon from "../../assets/googlePay.png";
import payPalIcon from "../../assets/payPal.png";

const creditInputs = [
  { label: "Name on Card", type: "default" },
  { label: "Credit Card Number", type: "numeric" },
  { label: "Expiry Date", type: "numeric" },
  { label: "CV", type: "numeric" },
];

const Stack = createStackNavigator();

export function BalanceScreen() {
  // const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OpalScreen" component={OpalScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export function OpalScreen({ navigation }) {
  const [opalCardNum, setOpalCardNum] = useState("");
  const [opalCardPass, setOpalCardPass] = useState("");
  const [userMatched, setUserMatched] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <SettingsButton navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          position: "relative",
          paddingHorizontal: 16,
          width: "100%",
        }}
      >
        <Text style={ScreenHeadingStyles}>Balance</Text>
        <Text
          style={{
            fontSize: 16,
            color: MAIN_PRIMARY_COLOUR,
            marginTop: 8,
            fontFamily: "WorkSans_400Regular",
          }}
        >
          View and manage your Opal Balance.
        </Text>
        {!userMatched ? (
          <OpalSignIn
            opalCardNum={opalCardNum}
            opalCardPass={opalCardPass}
            setOpalCardNum={setOpalCardNum}
            setOpalCardPass={setOpalCardPass}
            setUserMatched={setUserMatched}
          />
        ) : (
          <DisplayOpalBalance
            userMatched={userMatched}
            setUserMatched={setUserMatched}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

function DisplayOpalBalance({ userMatched, setUserMatched }) {
  const [topUpAmount, setTopUpAmount] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(
    userMatched["OpalCurrBalance"]
  );

  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "WorkSans_800ExtraBold",
            marginTop: 24,
            color: MAIN_PRIMARY_COLOUR,
            fontSize: 16,
          }}
        >
          OPAL BALANCE - {userMatched["type"]}, {userMatched["name"]}
        </Text>
        <TouchableOpacity onPress={() => setUserMatched(false)}>
          <Text
            style={{
              fontSize: 12,
              marginTop: 24,
              fontFamily: "WorkSans_500Medium",
              color: MAIN_PRIMARY_COLOUR,
            }}
          >
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: "WorkSans_400Regular",
          color: MAIN_PRIMARY_COLOUR,
          marginTop: 8,
          fontSize: 16,
        }}
      >
        Current Balance: ${currentBalance.toFixed(2)}
      </Text>
      <Text
        style={{
          fontFamily: "WorkSans_800ExtraBold",
          marginTop: 24,
          color: MAIN_PRIMARY_COLOUR,
          fontSize: 16,
        }}
      >
        Update Balance
      </Text>
      <Text
        style={{
          fontFamily: "WorkSans_400Regular",
          color: MAIN_PRIMARY_COLOUR,
          marginTop: 8,
          fontSize: 16,
        }}
      >
        Select or enter an amount to top-up.
      </Text>
      <TopUpButtons setTopUpAmount={setTopUpAmount} topUpAmount={topUpAmount} />
      <View style={{ marginBottom: 8 }} />
      <Text
        style={{
          alignSelf: "center",
          fontSize: 20,
          fontFamily: "WorkSans_400Regular",
        }}
      >
        OR
      </Text>
      <View style={{ marginBottom: 8 }} />
      <TopUpInput setTopUpAmount={setTopUpAmount} />
      <View style={{ marginBottom: 16 }} />
      <TouchableOpacity
        style={{
          backgroundColor: MAIN_PRIMARY_COLOUR,
          borderRadius: 24,
          paddingHorizontal: 12,
          paddingVertical: 8,
          width: 90,
          alignSelf: "center",
          alignItems: "center",
          opacity: topUpAmount !== "" ? 1 : 0.4,
        }}
        disabled={topUpAmount === ""}
        onPress={() => {
          setShowModal("pay");
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontFamily: "WorkSans_400Regular",
          }}
        >
          TOP-UP
        </Text>
      </TouchableOpacity>
      <BalanceModal
        setShowModal={setShowModal}
        setCurrentBalance={setCurrentBalance}
        topUpAmount={topUpAmount}
        setTopUpAmount={setTopUpAmount}
        currentBalance={currentBalance}
        showModal={showModal}
      />
    </View>
  );
}

function BalanceModal({
  showModal,
  setShowModal,
  setCurrentBalance,
  currentBalance,
  setTopUpAmount,
  topUpAmount,
}) {
  const [detailsEntered, setDetailsEntered] = useState(0);

  return (
    <Modal
      animated={"fade"}
      transparent={true}
      visible={showModal === "pay" || showModal === "feedback"}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "#00000080",
        }}
      >
        <View
          style={{
            backgroundColor: "#EEEEEE",
            width: "100%",
            height: Dimensions.get("window").height * 0.57,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            position: "relative",
            justifyContent: showModal === "feedback" ? "center" : undefined,
            padding: 24,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "WorkSans_500Medium",
                fontSize: 24,
                color: MAIN_PRIMARY_COLOUR,
                alignSelf: "center",
              }}
            >
              {showModal === "pay" ? "Top-up Payment" : "Payment Successful!"}
            </Text>
            {showModal === "pay" && (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    marginTop: 24,
                    marginBottom: 16,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "WorkSans_800ExtraBold",
                      fontSize: 12,
                      marginBottom: 12,
                      color: MAIN_PRIMARY_COLOUR,
                      textTransform: "uppercase",
                    }}
                  >
                    Debit/Credit Card
                  </Text>
                  {creditInputs.map((paymentDetail) => (
                    <CreditDebitInput
                      label={paymentDetail["label"]}
                      type={paymentDetail["type"]}
                      setDetailsEntered={setDetailsEntered}
                      detailsEntered={detailsEntered}
                    />
                  ))}
                </View>
                <PayButton
                  detailsEntered={detailsEntered}
                  setShowModal={setShowModal}
                  currentBalance={currentBalance}
                  setCurrentBalance={setCurrentBalance}
                  topUpAmount={topUpAmount}
                  setTopUpAmount={setTopUpAmount}
                />
                <View style={{ marginBottom: 16 }} />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "WorkSans_800ExtraBold",
                    color: MAIN_PRIMARY_COLOUR,
                    marginBottom: 8,
                    textTransform: "uppercase",
                  }}
                >
                  Other
                </Text>
                <OtherPayments
                  setShowModal={setShowModal}
                  setCurrentBalance={setCurrentBalance}
                  currentBalance={currentBalance}
                  topUpAmount={topUpAmount}
                  setTopUpAmount={setTopUpAmount}
                />
              </>
            )}
          </View>
          <CloseModal setState={setShowModal} />
        </View>
      </View>
    </Modal>
  );
}

function OtherPayments({
  setShowModal,
  setCurrentBalance,
  currentBalance,
  topUpAmount,
  setTopUpAmount,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <OtherPaymentsButton
        setShowModal={setShowModal}
        setCurrentBalance={setCurrentBalance}
        currentBalance={currentBalance}
        topUpAmount={topUpAmount}
        setTopUpAmount={setTopUpAmount}
        icon={googlePayIcon}
        colour={MAIN_PRIMARY_COLOUR}
        label={"GOOGLE PAY"}
      />
      <View style={{ marginRight: 8 }} />
      <OtherPaymentsButton
        setShowModal={setShowModal}
        setCurrentBalance={setCurrentBalance}
        currentBalance={currentBalance}
        topUpAmount={topUpAmount}
        setTopUpAmount={setTopUpAmount}
        icon={payPalIcon}
        colour={"white"}
        label={"PAYPAL"}
      />
    </View>
  );
}

function OtherPaymentsButton({
  setCurrentBalance,
  currentBalance,
  topUpAmount,
  setTopUpAmount,
  setShowModal,
  colour,
  label,
  icon,
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colour,
        width: 150,
        height: 42,
        borderRadius: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 12,
        elevation: 1,
      }}
      onPress={() => {
        setCurrentBalance(currentBalance + topUpAmount);
        setTopUpAmount("");
        setShowModal("feedback");
      }}
    >
      <Image
        source={icon}
        style={{
          width: 14,
          height: 14,
          resizeMode: "contain",
          marginRight: 6,
          marginBottom: -1,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: colour === MAIN_PRIMARY_COLOUR ? "white" : MAIN_PRIMARY_COLOUR,
          fontFamily: "WorkSans_500Medium",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function PayButton({
  setShowModal,
  setCurrentBalance,
  currentBalance,
  topUpAmount,
  setTopUpAmount,
  detailsEntered,
}) {
  return (
    <TouchableOpacity
      style={{
        width: 90,
        height: 42,
        backgroundColor: MAIN_PRIMARY_COLOUR,
        borderRadius: 24,
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
        opacity: detailsEntered === 4 ? 1 : 0.4,
        elevation: 1,
      }}
      disabled={detailsEntered !== 4}
      onPress={() => {
        setCurrentBalance(currentBalance + topUpAmount);
        setTopUpAmount("");
        setShowModal("feedback");
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 12,
          fontFamily: "WorkSans_700Bold",
        }}
      >
        PAY
      </Text>
    </TouchableOpacity>
  );
}

function CreditDebitInput({ label, type, setDetailsEntered, detailsEntered }) {
  const [value, setValue] = useState("");
  const [appended, setAppended] = useState(false);

  return (
    <TextInput
      style={{
        width:
          type === "numeric" && label !== "Credit Card Number"
            ? label === "CV"
              ? "30%"
              : "40%"
            : "100%",
        backgroundColor: "white",
        height: 42,
        borderRadius: 24,
        paddingHorizontal: 24,
        marginBottom: 6,
        marginRight:
          type === "numeric" && label !== "Credit Card Number" ? 6 : 0,
        fontSize: 12,
        fontFamily: "WorkSans_400Regular",
      }}
      value={value}
      onChangeText={(input) => {
        setValue(input);
        if (input !== "" && !appended) {
          setDetailsEntered(detailsEntered + 1);
          setAppended(true);
        } else if (input === "" && appended) {
          setDetailsEntered(detailsEntered - 1);
          setAppended(false);
        }
      }}
      placeholder={label}
      keyboardType={type}
    />
  );
}

function TopUpInput({ setTopUpAmount }) {
  const [value, setValue] = useState("");
  return (
    <TextInput
      style={{
        width: "100%",
        backgroundColor: "white",
        height: 42,
        borderRadius: 24,
        paddingHorizontal: 24,
        fontSize: 12,
        fontFamily: "WorkSans_400Regular",
      }}
      placeholder={"Enter amount..."}
      keyboardType={"numeric"}
      value={value}
      onChangeText={(input) => {
        setValue(input);
        setTopUpAmount(Number(input));
      }}
      clearButtonMode={"always"}
    />
  );
}

const topUpOptions = [5, 10, 15, 20, 25, 50];

function TopUpButtons({ setTopUpAmount }) {
  const [selected, setSelected] = useState("");

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 16,
        marginRight: -24,
      }}
    >
      {topUpOptions.map((option) => (
        <>
          <TouchableOpacity
            style={{
              height: 42,
              width: 90,
              borderRadius: 24,
              elevation: 2,
              backgroundColor:
                selected !== option ? "white" : MAIN_PRIMARY_COLOUR,
              marginBottom: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              if (option === selected) {
                setTopUpAmount("");
                setSelected("");
              } else {
                setTopUpAmount(option);
                setSelected(option);
              }
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: selected === option ? "white" : MAIN_PRIMARY_COLOUR,
                fontFamily: "WorkSans_500Medium",
              }}
            >
              ${option.toFixed(2)}
            </Text>
          </TouchableOpacity>
          <View style={{ marginRight: 24 }} />
        </>
      ))}
    </View>
  );
}

function OpalSignIn({
  opalCardNum,
  opalCardPass,
  setOpalCardNum,
  setOpalCardPass,
  setUserMatched,
}) {
  return (
    <View style={{ justifyContent: "center", width: "100%" }}>
      <Text
        style={{
          fontFamily: "WorkSans_700Bold",
          marginTop: 24,
          fontSize: 16,
          color: MAIN_PRIMARY_COLOUR,
        }}
      >
        OPAL BALANCE
      </Text>
      <OpalCardInput
        placeholder="Opal Card Number..."
        text={opalCardNum}
        setText={setOpalCardNum}
      />
      <OpalCardInput
        placeholder="Opal Security Code or Password..."
        text={opalCardPass}
        setText={setOpalCardPass}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 24,
          paddingHorizontal: 16,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              color: MAIN_PRIMARY_COLOUR,
              fontFamily: "WorkSans_400Regular",
              fontSize: 10,
              textDecorationLine: "underline",
            }}
          >
            Forgot username/password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: MAIN_PRIMARY_COLOUR,
            borderRadius: 24,
            paddingHorizontal: 12,
            paddingVertical: 8,
          }}
          onPress={() => {
            const match = OpalDetails.filter((userDetails) => {
              if (
                userDetails["OpalCardNum"] === opalCardNum &&
                userDetails["OpalCardPass"] === opalCardPass
              ) {
                return userDetails;
              }
            });
            if (match.length > 0) {
              setUserMatched(match[0]);
            }
          }}
        >
          <Image
            source={opalIcon}
            style={{
              width: 30,
              height: 10,
              resizeMode: "contain",
              marginRight: 2,
            }}
          />
          <Text
            style={{
              color: "white",
              fontFamily: "WorkSans_700Bold",
              marginTop: -3.7,
              fontSize: 10,
            }}
          >
            SIGN IN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function OpalCardInput({ placeholder, text, setText }) {
  return (
    <TextInput
      style={{
        height: 46,
        backgroundColor: "white",
        width: "100%",
        borderRadius: 24,
        paddingLeft: 24,
        fontFamily: "WorkSans_300Light",
        fontSize: 12,
        color: MAIN_PRIMARY_COLOUR,
        marginTop: 8,
      }}
      onChangeText={(input) => {
        setText(input);
      }}
      value={text}
      placeholder={placeholder}
    />
  );
}
