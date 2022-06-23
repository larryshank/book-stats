import React from 'react';
import {useContext} from 'react';
import {Button} from 'react-native';

import {BookContext} from '../provider/BookProvider.js';
import BookOverview from '../BookOverview/BookOverview.js';

const Description = ({navigation}) => {
  const search = useContext(BookContext);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()} title="Cancel" />
      ),
    });
  }, [navigation]);

  const bookInfo = search.selectedResult.volumeInfo;
  const id = search.selectedResult.id;
  return <BookOverview info={bookInfo} id={id} navigation={navigation} />;
};

export default Description;
