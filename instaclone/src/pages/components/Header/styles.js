import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../estilos';


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: metrics.headerHeight+10,
    paddingTop: metrics.headerPadding,
    paddingHorizontal: metrics.padding,
    borderBottomWidth: 1,
    borderColor: colors.lighter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

 
});

export default styles;
