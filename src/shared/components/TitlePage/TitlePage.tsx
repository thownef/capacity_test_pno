type TitlePageProps = {
  title: string
  children?: React.ReactNode
}

const TitlePage = ({ title, children }: TitlePageProps) => {
  return (
    <>
      <h2 className='border-solid border-[#78B4FF] border-b py-2.5 !text-2xl mb-4'>{title}</h2>
      {children}
    </>
  )
}

export default TitlePage
