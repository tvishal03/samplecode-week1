import React, { Component } from 'react';
import { getCourses } from '../services/fakeCourseService';
import Pagination from './Pagination';
import { paginate } from '../util/paginate';

class Courses extends Component {

    constructor(){
        super();
       // console.log('constructor')
        this.state = {
            courses : [],
            pageSize : 2,
            currentPage: 1
        }
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
      };

    componentDidMount(){
       // console.log('componentDidMount()')
        const courses = getCourses();
        this.setState({  courses  })
    }

    handleRemove = (courseId) => {
        console.log('removing a course', courseId);
        const courses = this.state.courses.filter(c => c._id !== courseId)
        this.setState({courses})
    }

    render() {
        //console.log('render()')

        const { courses, pageSize, currentPage } = this.state;
        const { length:count } = courses;

        const paginatedData = paginate(courses, currentPage, pageSize)

        if(count===0)
            return <p>No Courses yet!..</p>

        return (
            <div>
                <h1>Courses</h1>
                <hr />

                <p>Showing { count } Courses from the database </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginatedData.map( course => (
                                   <tr key={course._id}>
                                       <td>{course.title}</td>
                                       <td>{course.category.name}</td>
                                       <td>{course.description}</td>
                                       <td>{course.startDate}</td>
                                       <td>{course.endDate}</td>
                                       <td>
                                           <button onClick={ ()=> this.handleRemove(course._id) } className="btn btn-danger btn-sm">
                                               Remove
                                           </button>
                                       </td>
                                   </tr>
                                )
                            )
                        }
                    </tbody>
                </table>

                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
          />

            </div>
        );
    }
}

export default Courses;