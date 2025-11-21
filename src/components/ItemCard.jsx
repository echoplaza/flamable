import sawdust from '../assets/sawdust.png'

const ItemCard = () => {
	return (

			
			<div className='flex flex-col sm:flex-row justify-center items-center w-10/12'>
				<img
					className='md:w-1/2 sm:my-20 px-4'
					src={sawdust}
					alt='Image of a dungeon door'
					
				/>
				<h1 className="md:w-5/6 font-heroking md:text-4xl text-2xl my-20 text-sawdust font-outline-1">
					This is flamable. 
				</h1>
			</div>
	
	)
}

export default ItemCard
