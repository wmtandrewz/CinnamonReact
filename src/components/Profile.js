import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile',
        drawerIcon: ({ tintColor }) => (<Icon name="user" size={24} style={{ color: tintColor }} />)
        
    };
    render() {
        return (
            <View style={styles.container}>
                <Header
                    barStyle="default" // or directly
                    leftComponent={{
                        icon: 'menu', color: '#fff', onPress: () => {
                            this.props.navigation.openDrawer();
                        }
                    }}
                    centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}

                />
                <View style={StyleSheet.section}>
                    <Avatar
                        size="xlarge"
                        rounded
                        title="TA"
                        source={{ uri: 'https://scontent.fcmb1-1.fna.fbcdn.net/v/t1.0-9/57418973_1154435081394529_1575151944110964736_o.jpg?_nc_cat=102&_nc_ht=scontent.fcmb1-1.fna&oh=b4273b2ac04538539e4647e8d08e0ef0&oe=5D40C2B1' }}
                        onPress={() => console.log("Works!")}
                        containerStyle={{ margin: 20 }}
                        activeOpacity={0.7}
                    />
                </View>
                <Text>Hellow from Profile</Text>
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
        margin: 20
    }
});
