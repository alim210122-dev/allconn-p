import React, {useEffect, useState} from 'react';
import {Badge, Table} from 'reactstrap';
import {setClickedData} from 'redux/productCode/reducers';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

const ShowMainCode = (props) => {

    // props 정의하기
    const {maincode, setFilterData, filterData, sampleCode, filterDataProduct} = props;

    // redux State 값 가져오기
    const {clickedProductCode, productInfo, filterCompanyList} = useSelector(
        state => ({
            clickedProductCode: state.productCode.clickedProductCode,
            productInfo: state.productCode.productInfo,
            filterCompanyList: state.productCode.filterCompanyList,
        }),
        shallowEqual
    );

    // 컴포넌트 자체 State 값 정의하기
    const [data, setData] = useState();
    const [dataSecond, setDataSecond] = useState();

    //Redux Dispatch 정의하기
    const dispatch = useDispatch();
    const handleClickedData = (text) => {
        dispatch(setClickedData(text));
    };

    // 검색 필터 만들기 (거래처가 선택된 경우에 필터링 되는 함수)
    const filterProductList = (ArrayList, filterData, filterDataProduct) => {
        const duplicateArray = ArrayList;
        const filteredArray = duplicateArray.filter((v) => v.companyCode === filterData);

        if (filterDataProduct == null) {
            return filteredArray;
        } else {
            const filteredArray2 = filteredArray.filter((v) => v.productName.indexOf(filterDataProduct) > -1);
            return filteredArray2;
        }
    }

    // 검색 필터 만들기 (거래처 구분 없이, 제품명이 검색이 되도록하는 필터)
    const filterProductList2 = (ArrayList, filterCompanyList) => {
        const duplicateArray = ArrayList;
        const filteredArray = duplicateArray.filter((v) => v.productName.indexOf(filterCompanyList) > -1);
        return filteredArray;
    }

    useEffect(() => {
        if (filterCompanyList === null) {
            setData(filterProductList(sampleCode, filterData, filterDataProduct));
        } else {
            setData(filterProductList2(sampleCode, filterCompanyList))
        }
    }, [filterData, filterDataProduct, filterCompanyList])

    return (
        <div>
            {clickedProductCode}
            <Table size="sm" hover>

                <thead>
                <tr>
                    <th>코드</th>
                    <th>명칭</th>
                    <th>생성일</th>
                    <th>폐기일</th>
                    <th>담당자</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {data && data.map((v) => {
                    return (
                        <tr key={v.productCode + v.productName} onClick={() => handleClickedData(v.productCode)}>
                            <td style={{textAlign: "center"}}>{v.productCode}</td>
                            <td>{v.productName}</td>
                            <td style={{textAlign: "center"}}>{v.startDate}</td>
                            <td style={{textAlign: "center"}}>{v.endDate}</td>
                            <td style={{textAlign: "center"}}>{v.manager}</td>
                            <td className="badgePointer" style={{textAlign: "center"}}>
                                {/*<Badge color="secondary" pill onClick={()=>setFilterData(v.code)}>수정</Badge>*/}
                                <Badge color="danger" pill>삭제</Badge>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
    )
}

export default ShowMainCode;