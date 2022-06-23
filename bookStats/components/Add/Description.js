import React from 'react';
import {useContext} from 'react';
import {Button} from 'react-native';
import {StackActions} from '@react-navigation/native';

import {BookContext} from '../provider/BookProvider.js';
import BookOverview from '../BookOverview/BookOverview.js';

const Description = ({navigation}) => {
  const search = useContext(BookContext);

  const goHomeAndResetSearch = () => {
    search.setSearchResults([]);
    navigation.dispatch(StackActions.popToTop());
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => navigation.goBack()}
          title="Cancel"
          color="#66b9ef"
        />
      ),
      headerRight: () => (
        <Button
          onPress={() => goHomeAndResetSearch()}
          title="Home"
          color="#66b9ef"
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const bookInfo = search.selectedResult.volumeInfo;
  const id = search.selectedResult.id;
  return <BookOverview info={bookInfo} id={id} navigation={navigation} />;
};

export default Description;
