import useSWR from 'swr'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'

const USER_NAME = 'asadm'
const REPO_NAME = 'asadm.github.io'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function GitHubIssues({ issueId }) {
  const { data, error } = useSWR(`https://api.github.com/repos/${USER_NAME}/${REPO_NAME}/issues/${issueId}/comments?per_page=100`, fetcher)
  return (
    <div className="github-issues">
      <center><a className='btn-add-comment' href={`https://github.com/${USER_NAME}/${REPO_NAME}/issues/${issueId}`} target="_blank">Add comment here using GitHub Issues</a></center>
      <div className='comments'>
        {data && data.sort((a, b) =>
        moment(b.created_at).unix() - moment(a.created_at).unix()).map(comment => (
          <div key={comment.id} className='comment'>
            <div className='comment-header'>
              <img src={comment.user.avatar_url} alt={comment.user.login} />
              <div className='comment-header-info'>
                <div className='comment-header-info-name'>
                  <a href={comment.user.html_url} target="_blank">{comment.user.login}</a>
                </div>
                <div className='comment-header-date' title={moment(comment.created_at).format('MMMM Do YYYY, h:mm:ss a')}>
                {moment(comment.created_at).fromNow()}
              </div>
              </div>
              
            </div>
            <div className='comment-body'>
              <div className='comment-body-text'>
                <ReactMarkdown children={comment.body} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}