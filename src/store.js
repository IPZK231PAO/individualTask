import { create } from 'zustand'
import axios from 'axios'

const useBeersStore = create(set => ({
	data: [],
	idData: [],
	IsLoading: false,
	hasErrors: false,
	fetchData: async () => {
		try {
			set({ isLoading: true })
			const response = await axios.get(
				'https://api.punkapi.com/v2/beers?page=1'
			)
			set({ isLoading: false, data: response.data })
			console.log('fetch')
		} catch (err) {
			set({ error: err.message, isLoading: false })
		}
	},
	fetchByID: async id => {
		try {
			set({ isLoading: true })
			const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
			set({ isLoading: false, idData: response.data[0] })
			console.log('fetch by iD')
		} catch (err) {
			set({ error: err.message, isLoading: false })
		}
	},
	remove: id => {
		set(state => ({
			data: state.data.filter(post => post.id !== id)
		}))
	}
}))

export default useBeersStore
// 'https://api.punkapi.com/v2/beers?page=1
