import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  header: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: '#000000',
  },
  headerTabActive: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
    paddingBottom: 5,
  },
  headerTab: {
    color: '#AAAAAA',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
  },

  feedContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  column: {
    flex: 1,
    marginHorizontal: 8,
  },
  card: {
    marginBottom: 16,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',

  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  navIcon: {
    width: 25,
    height: 25,
    tintColor: '#FFFFFF',
    resizeMode: 'contain',
  },
});