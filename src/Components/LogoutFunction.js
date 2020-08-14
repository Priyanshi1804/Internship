export const handleLogout = () => {
    console.warn('in logout');
    Alert.alert(
        'Alert',
        'Do You Want to close?',
        [

          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => this.signOut()},
        ],
        {cancelable: false},
      );
  }

export const signOut= ()=> {
    console.log('here..');
    firebase.auth().signOut();
      const resetAction = StackActions.reset({
         index: 0,
         actions: [NavigationActions.navigate({ routeName: 'Login' })]
       });
       this.props.myNavigation.dispatch(resetAction);

  }
  