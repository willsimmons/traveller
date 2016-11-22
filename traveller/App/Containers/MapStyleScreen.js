import React, { PropTypes } from 'react'
import { View, ScrollView, Switch, Picker, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import MapActions from '../Redux/MapRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Colors, Images, Metrics } from '../Themes'
import { CheckBox, Card, Button, List, ListItem, ButtonGroup } from 'react-native-elements'
import CustomActionSheet from 'react-native-custom-action-sheet'
import SettingsList from 'react-native-settings-list';

import Icon from 'react-native-vector-icons/FontAwesome'

// Styles
import styles from './Styles/SettingsScreenStyle'

class MapStyleScreen extends React.Component {

  render () {
    const { mapStyle, setMapStyle } = this.props

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={{flex:1}}>
            <View style={{flex:1}}>
              <SettingsList>
                <SettingsList.Header />
                  {['Normal', 'Terrain', 'Satellite'].map((mapStyleName, index) =>
                    <SettingsList.Item
                      title={mapStyleName}
                      key={index}
                      onPress={() => setMapStyle(mapStyleName)}
                      arrowIcon={ ( <Icon name="check" size={14} color={(mapStyle === mapStyleName) ? "blue" : "rgba(255,255,255,0)"} /> ) }
                    />
                  )}
              </SettingsList>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mapStyle: state.map.mapStyle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMapStyle: (mapStyleName) => dispatch(MapActions.setMapStyle(mapStyleName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapStyleScreen)
