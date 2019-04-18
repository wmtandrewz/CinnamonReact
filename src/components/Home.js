import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Header,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Counter from '../containers/Counter';

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
        drawerIcon: ({ tintColor }) => (<Icon name="home" size={24} style={{ color: tintColor }} />),
    };
    render() {
        return (
            <View style={styles.container}>
                <Header
                    barStyle="default" // or directly
                    leftComponent={
                        {
                            icon: 'menu',
                            color: '#fff',
                            onPress: () => {
                                this.props.navigation.openDrawer();
                            }
                        }
                    }
                    centerComponent={{ text: 'HOME', style: { color: '#fff' } }}

                />

                <View style={StyleSheet.section}>
                    <Image
                        source={{ uri: 'https://scontent.fcmb1-1.fna.fbcdn.net/v/t1.0-9/57418973_1154435081394529_1575151944110964736_o.jpg?_nc_cat=102&_nc_ht=scontent.fcmb1-1.fna&oh=b4273b2ac04538539e4647e8d08e0ef0&oe=5D40C2B1' }}
                        style={{ width: 400, height: 250, margin: 5 }}
                        resizeMethod='auto'
                        resizeMode='cover'
                    />
                </View>
                <View style={StyleSheet.section}>
                    <Counter />
                </View>
                <View style={StyleSheet.section}>
                    <Button
                        title="Go To Details"
                        onPress={
                            () => this.props.navigation.navigate('Details')
                        }
                        type='outline'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'

    },

    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical:20
    }
});
