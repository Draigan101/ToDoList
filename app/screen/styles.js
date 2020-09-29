import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#1f38de',
    width: width+15,
    zIndex: 0,
    borderBottomRightRadius: 999
  },
  headerTitle: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 25
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {
    flex: 1,
    fontSize: 18
  },
  delete: {
    alignSelf: 'flex-end',
    padding: 3
  },
  addBtn: {
    width: 60,
    height: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    borderRadius: 999,
    backgroundColor: '#1f38de',
    position: 'absolute',
    bottom: 15,
    right: 15
  },
  body: {
    marginHorizontal: 15,
    marginVertical: 10
  },
  input: {
    marginBottom: 15,
    padding: 10,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  btnAdd: {
    backgroundColor: '#1f38de',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 20,
    borderRadius: 999
  },
  btnAddLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})