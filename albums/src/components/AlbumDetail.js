import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Card, CardSection, ButtonForm } from './common';

const AlbumDetail = (props) => {
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContentStyle,
    titleStyle,
    imageStyle } = styles;
  const { title, artist, thumbnail_image, image, url } = props.album;

  return(
    <Card>
      <CardSection>
        <View style={thumbnailContentStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>

        <View style={headerContentStyle}>
          <Text style={titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{uri: image }} />
      </CardSection>

      <CardSection>
        <ButtonForm onPress={() => Linking.openURL(url)}>
          Comprar
        </ButtonForm>
      </CardSection>
    </Card>
  );

};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContentStyle:{
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail;
