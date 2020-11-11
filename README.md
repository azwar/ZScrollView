
# ZScrollView

This is React Native component to replace default React Native ScrollView. Most of us tired with this error sentence "VirtualizedLists should never be nested inside plain ScrollViews" so here it is. This is basically an extends of FlatList, it just simple, but rather than rewrite it just use it as library. Hope this will be useful. 

# Install

For now you can install this library using url package:
**NPM**
```
npm install --save https://github.com/azwar/ZScrollView
```
**Yarn**
```
yarn add https://github.com/azwar/ZScrollView
```

# Sample
```javascript
import ZScrollView from  "ZScrollView";

....

<ZScrollView>
    <Text>Page title</Text>
	<FlatList
        nestedScrollEnabled={true}
        data={listData}
        renderItem={(item) => <ItemView item={item.item}/>}
    />
</ZScrollView>
```


### Props

The props and method for this components is just the same as FlatList. See [this FlatList documentation](https://reactnative.dev/docs/flatlist) to know the props and method.

License
----

### Apache License 2.0

A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.