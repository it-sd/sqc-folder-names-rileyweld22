const newFolderName = function (folders) {
  const test = Array.from(folders)
  let n = 1

  if (!folders.includes('New Folder')) {
    folders.push('New Folder')
    return folders[folders.length - 1]
  }

  n++

  if (!folders.includes(`New Folder (${n})`)) {
    test.push(`New Folder (${n})`)
    return `New Folder (${n})`
  }

  if (n === folders.length) {
    test.push(`New Folder (${n + 1})`)
  }
  return test[test.length - 1]
}

const arr = ['New Folder (2)', 'New Folder (5)', 'New Folder (7)']

newFolderName(arr)

module.exports = { newFolderName }
