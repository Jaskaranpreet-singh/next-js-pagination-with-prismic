import { PrismicRichText } from "@prismicio/react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "./pagination.module.scss";

const Pagination = ({totalItems}) => {
  // console.log('totalItems', totalItems);
  let router = useRouter();
  const totalPages = [...Array(totalItems)]
  return (
    <section>
      {totalPages.length > 1 ? 
        <div className={`${styles['mx-auto']}`}>
          <ul className="pagination">
            <li className="page-item">
              <div className={`page-link ${router.query.id == undefined || router.query.id == 1 ? 'disabled' : ''}`}>
                <Link  className="page-link" href={'/page/' + String(Number(router.query.id) - 1) }>&laquo;</Link>
              </div>
            </li>
            {totalPages?.map((el, index) => (
              <li className="page-item" key={Number(index + 1)}>
                <div className={`page-link ${router.query.id == Number(index + 1) ? 'active' : ''}`}>
                  <Link className="page-link" href={'/page/'+ Number(index + 1)}>
                    {Number(index + 1)}
                  </Link> 
                </div>
              </li>              
            ))}                      
            <li className="page-item">
              <div className={`page-link ${totalPages.length == Number(router.query.id) ? 'disabled' : '' }`}>
                <Link href={'/page/' + (router?.query?.id ? String(Number(router?.query?.id) + 1) : '2') }>&raquo;</Link>
              </div>
            </li>
          </ul>
        </div>  
      : ''}
    </section>
  );
};

export default Pagination;