import React from 'react';
import { FlatList, } from 'react-native';

export default function ZScrollView(props) {
  
return (
    <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>
          {props.children}
        </React.Fragment>
      )}
      ListEmptyComponent={null}
      keyExtractor={() => "blank"}
      {...props}
    />
  );
}