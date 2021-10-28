import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Card, Icon } from "react-native-elements";
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";

export default class RecommendedArticlesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const url = "http://d3b5-136-185-101-18.ngrok.io/recommended-articles";
    axios
      .get(url)
      .then(async response => {
        this.setState({ data: response.data.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  keyExtractor = (item, index) => index.toString();

  renderItems = ({ item, index }) => {
    return (
      <Card style={styles.cardContainer} key={`card-${index}`}>
        <Text>{item.title}</Text>
        <Card.Divider />
        <View style={styles.iconContainer}>
          <Icon type={"antdesign"} name={"heart"} size={RFValue(20)} />
          <Text style={{ fontSize: RFValue(18) }}>{item.total_events}</Text>
        </View>
      </Card> 
    );
  };

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDD4C6"
  },
  cardContainer: {
    backgroundColor: "#FDDAE1",
    flex: 1,
    borderRadius: RFValue(10),
    justifyContent: "center",
    height: RFValue(130),
    marginBottom: RFValue(20),
  },
  iconContainer: {
    flexDirection: "row",
    borderWidth: 1,
    width: "30%",
    height: RFValue(40),
    alignSelf: "flex-end",
    borderRadius: RFValue(10),
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});