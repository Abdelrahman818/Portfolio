const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
      © {year} Abdelrahman Ismaeel. All rights reserved.
    </footer>
  )
}

export default Footer
